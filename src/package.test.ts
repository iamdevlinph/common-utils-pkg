import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(__dirname, '..');
const packageJson = JSON.parse(
  readFileSync(join(root, 'package.json'), 'utf8')
) as {
  publishConfig?: { registry?: string; access?: string };
  repository?: { url?: string };
};
const workflow = readFileSync(
  join(root, '.github/workflows/publish-package.yml'),
  'utf8'
);

describe('package publishing configuration', () => {
  test('uses npm Trusted Publishing', () => {
    expect(packageJson.publishConfig).toEqual({
      registry: 'https://registry.npmjs.org',
      access: 'public',
    });
    expect(packageJson.repository?.url).toBe(
      'git+https://github.com/iamdevlinph/common-utils-pkg.git'
    );
    expect(() => readFileSync(join(root, '.npmrc'))).toThrow();
    expect(workflow).toMatch(/release:\s*\n\s*types: \[published\]/);
    expect(workflow).toMatch(/permissions:\s*\n\s*contents: read/);
    expect(workflow).toMatch(
      /publish:\s*\n\s*needs: validate[\s\S]*?permissions:\s*\n\s*contents: read\n\s*id-token: write/
    );
    const validateJob = workflow.match(
      /\n  validate:\n([\s\S]*?)\n  publish:\n/
    )?.[1];
    expect(validateJob).toBeDefined();
    expect(validateJob).not.toContain('id-token: write');
    expect(workflow).toContain('registry-url: https://registry.npmjs.org');
    expect(workflow).toContain('NPM_VERSION=$(npm --version)');
    expect(workflow).not.toContain('npm install --global');
    expect(workflow).toContain('pnpm run typecheck');
    expect(workflow).toContain('pnpm test');
    expect(workflow).toContain('RELEASE_TAG');
    expect(workflow).toContain('test "$RELEASE_TAG" = "v$PACKAGE_VERSION"');
    expect(workflow).toContain('actions/upload-artifact@v7');
    expect(workflow).toContain('actions/download-artifact@v8');
    expect(workflow).toContain(
      'npm publish package-artifact/*.tgz --access public'
    );
    expect(workflow).not.toMatch(
      /NPM_TOKEN|NODE_AUTH_TOKEN|npm.pkg.github.com/
    );
  });
});

// @ts-check
const path = require('path');
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  alias: {
    '/@/': path.resolve(__dirname, '../src')
  },
  optimizeDeps: {
    include: ['antd']
  }
}

module.exports = config

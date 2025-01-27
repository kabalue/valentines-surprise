
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/valentines-surprise/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/valentines-surprise"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 739, hash: '1e0e8b42f8cc944126c691506300f28f9a81d2488b3b036c59f81a60f51bc96c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: '29ac13ca1a5cb17d6f14bcb4607d2ac4f0ffc82d4565172f1432bb932ad3fca2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3385, hash: '4139b8aa3b2dde75a68ceb51034fbb1015dcf3cac953b42950249a5629198abc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XMN7IDNH.css': {size: 278, hash: '67bkf0ABYpo', text: () => import('./assets-chunks/styles-XMN7IDNH_css.mjs').then(m => m.default)}
  },
};

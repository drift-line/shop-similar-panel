// panel-bundle.js
(function () {
  var ctx = window.ShopSimilarPanelContext || {};
  var mount = ctx.content || document.createElement('div');

  var container = document.createElement('div');
  container.style.padding = '32px';
  container.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  container.innerHTML = `
    <h1 style="font-size:20px;margin-bottom:12px;">Shop Similar Panel</h1>
    <p style="line-height:1.5;margin-bottom:16px;">
      This is a placeholder bundle served from GitHub Pages.
    </p>
    <pre style="background:#f8fafc;padding:12px;border-radius:8px;font-size:12px;">
${ctx.config ? JSON.stringify(ctx.config, null, 2) : 'No config provided.'}
    </pre>
  `;

  if (typeof ctx.replaceContent === 'function') {
    ctx.replaceContent(container);
  } else {
    mount.appendChild(container);
  }
})();

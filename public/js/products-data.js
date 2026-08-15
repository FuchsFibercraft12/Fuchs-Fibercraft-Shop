// Lädt public/data/products.json und rendert Artikel in #product-list.
// Ergänzt data-* attributes (category, price, name) für Filter/Sort.
(async function(){
  async function fetchProducts(){
    try{
      const res = await fetch('/data/products.json');
      if(!res.ok) throw new Error('Products JSON not found');
      return await res.json();
    } catch(e){
      console.error('Fehler beim Laden der Produktdaten', e);
      return [];
    }
  }

  function createProductCard(p){
    const article = document.createElement('article');
    article.className = 'product';
    article.dataset.category = p.category;
    article.dataset.price = (p.onSale && p.salePrice) ? p.salePrice.toString() : p.price.toString();
    article.dataset.name = p.name;

    article.innerHTML = `
      <div class="media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <h3>${p.name}</h3>
      <p class="desc">${p.description}</p>
      <div class="meta">
        <div class="price">€ <span class="${p.onSale ? 'flicker' : ''}">${(p.onSale && p.salePrice) ? p.salePrice.toFixed(2) : p.price.toFixed(2)}</span></div>
        <div class="stock">${p.stock > 0 ? 'Auf Lager' : 'Ausverkauft'}</div>
      </div>
    `;
    return article;
  }

  const list = document.getElementById('product-list');
  if(!list) return;

  const products = await fetchProducts();
  const cards = products.map(createProductCard);
  cards.forEach(c => list.appendChild(c));

  // Wenn du schon ein Filter-/Sort-Script hast, benutzt es die data-* attributes.
  // Optional: emit an event so other scripts can hook in:
  document.dispatchEvent(new CustomEvent('products:loaded', { detail: { count: cards.length }}));
})();

export default function (el) {

  const PRICING = {
     monthly: {
        price: 30,
        period: '/mo',
        billed: '',
        savings: ''
     },
     quarterly: {
        price: 25.50,
        period: '/mo',
        billed: 'Billed $76.50 every 3 months',
        savings: 'Save 15%'
     },
     yearly: {
        price: 21,
        period: '/mo',
        billed: 'Billed $252 per year',
        savings: 'Save 30%'
     }
  };

  function updatePricing(billing) {
     const plan = PRICING[billing];

     // Update active button
     document.querySelectorAll('.billing-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.billing === billing);
     });

     // Update price display
     const priceEl = document.getElementById('proPrice');
     const billedEl = document.getElementById('proBilled');
     const savingsEl = document.getElementById('proSavings');

     // Animate price change
     priceEl.style.opacity = '0';
     priceEl.style.transform = 'translateY(-10px)';

     setTimeout(() => {
        priceEl.textContent = plan.price % 1 === 0 ? plan.price : plan.price.toFixed(2);
        billedEl.textContent = plan.billed;
        savingsEl.textContent = plan.savings;

        priceEl.style.opacity = '1';
        priceEl.style.transform = 'translateY(0)';
     }, 150);
  }

  document.querySelectorAll('.billing-option').forEach(btn => {
     btn.addEventListener('click', () => updatePricing(btn.dataset.billing));
  });

  // Add transition to price element
  document.getElementById('proPrice').style.transition = 'all 0.15s ease';

}

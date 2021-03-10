import React from 'react';

function Card() {
  return (
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
               
  );
}

export default Card;
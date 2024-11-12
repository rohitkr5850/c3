let users = [ 
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
  ];
  
  // Retrieve cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function displayUsers() {
      const userContainer = document.getElementById('user-container');
      userContainer.innerHTML = '';
      users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('user-card');
          userCard.innerHTML = `
              <h3>${user.name}</h3>
              <p>${user.email}</p>
              <p>Username: ${user.username}</p>
              <button class="add-to-cart" onclick="addToCart(${user.id})">Add to Cart</button>
          `;
          userContainer.appendChild(userCard);
      });
  }
  
  function displayCart() {
      const cartContainer = document.getElementById('cart-container');
      cartContainer.innerHTML = '';
      cart.forEach(user => {
          const cartCard = document.createElement('div');
          cartCard.classList.add('cart-card');
          cartCard.innerHTML = `
              <h3>${user.name}</h3>
              <p>${user.email}</p>
              <p>Username: ${user.username}</p>
              <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
          `;
          cartContainer.appendChild(cartCard);
      });
  }
  
  function addToCart(userId) {
      if (!cart.some(user => user.id === userId)) {
          const user = users.find(user => user.id === userId);
          cart.push(user);
          saveCart();
          displayCart();
      } else {
          alert("User is already in the cart.");
      }
  }
  
  function removeFromCart(userId) {
      cart = cart.filter(user => user.id !== userId);
      saveCart();
      displayCart();
  }
  
  function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Initial display of users and cart
  displayUsers();
  displayCart();
  
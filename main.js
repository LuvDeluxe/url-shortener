const clearButton = document.querySelector('.clear');
const shortButton = document.querySelector('.shortit');
const originalURL = document.querySelector('.original');
const shortedURL = document.querySelector('.shortened-url-button');

clearButton.addEventListener('click', () => {
   location.reload();
});

shortButton.addEventListener('click', shortenURL);

async function shortenURL() {
   const apiUrl = `http://tinyurl.com/api-create.php?url=${originalURL.value}`;

   try {
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
         shortedURL.value = response.data;
      } else {
         console.error("Failed to shorten URL. Status code:", response.status);
      }
   } catch (error) {
      console.error("Error shortening URL:", error.message);
   }
}


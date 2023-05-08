document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON file
  fetch('https://sammi.solutions/patrons.json')
    .then((response) => response.json())
    .then((data) => {
      // Initialize empty arrays for each tier
      const purpleEmperor = [];
      const redAdmiral = [];
      const greenHairstreak = [];
      const brownArgus = [];
      const marbledWhite = [];

      // Iterate through the data and populate the arrays based on tier
      for (const [name, tier] of Object.entries(data)) {
        switch (tier) {
          case 'Purple Emperor':
            purpleEmperor.push(name);
            break;
          case 'Red Admiral':
            redAdmiral.push(name);
            break;
          case 'Green Hairstreak':
            greenHairstreak.push(name);
            break;
          case 'Brown Argus':
            brownArgus.push(name);
            break;
          case 'Marbled White':
            marbledWhite.push(name);
            break;
        }
      }

      // Populate the HTML elements with the names from each tier
      document.getElementById('purpleEmperor').innerHTML = purpleEmperor.join(', ');
      document.getElementById('redAdmiral').innerHTML = redAdmiral.join(', ');
      document.getElementById('greenHairstreak').innerHTML = greenHairstreak.join(', ');
      document.getElementById('brownArgus').innerHTML = brownArgus.join(', ');
      document.getElementById('marbledWhite').innerHTML = marbledWhite.join(', ');

      // Apply styles to each tier
      document.getElementById('purpleEmperor').classList.add('purpleEmperor');
      document.getElementById('redAdmiral').classList.add('redAdmiral');
      document.getElementById('greenHairstreak').classList.add('greenHairstreak');
      document.getElementById('brownArgus').classList.add('brownArgus');
      document.getElementById('marbledWhite').classList.add('marbledWhite');
    })
    .catch((error) => console.error('Error fetching JSON:', error));
});

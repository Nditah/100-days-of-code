const data = [
  {
    name: "Serenity Jacobs",
    age: 41,
    km: 123,
    description: "bla bla",
    image:
      "https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
  },
  {
    name: "Veronica Gilbert",
    age: 26,
    km: 14,
    description: "bla bla",
    image:
      "https://consmagic.com/wp-content/uploads/sites/373/2019/01/random-user-31.jpg",
  },
  {
    name: "Benjamin Armstrong",
    age: 38,
    km: 10,
    description: "bla bla",
    image:
      "https://i.pinimg.com/originals/78/07/03/78070395106fcd1c3e66e3b3810568bb.jpg",
  },
];

// Profile Iterator
function iterator(profiles) {
  let index = 0;

  return {
    next: function () {
      return index < profiles.length
        ? { value: profiles[index++], done: false }
        : { done: true };
    },
  };
}

const profiles = iterator(data);
nextProfile();

// Next event
document.querySelector(".love").addEventListener("click", nextProfile);
document.querySelector(".nope").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
   <div class="infos">
   <div class="name">${currentProfile.name}, ${currentProfile.age}</div>
      <div class="distance">${currentProfile.km} km near you</div>
   </div> 
  `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img class="image" src="${currentProfile.image}" width="250px" heigth="250px">`;
  } else {
    window.location.reload();
  }
}

const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const pokemonImg = document.getElementById("pokemonImg");
const pokemonName = document.getElementById("pokemonName");
const typeList = document.getElementById("typeList");
const abilityList = document.getElementById("abilityList");
const abTitle = document.getElementById("abTitle");
const header = document.getElementById("header");
const oak = document.getElementById("oak");

let pokemon;

btnSearch.addEventListener("click", (e) => {
	e.preventDefault();

	typeList.innerHTML = "";
	abilityList.innerHTML = "";
	pokemonName.textContent = "";
	pokemonImg.src = "";
	abTitle.textContent = "";

	header.classList.remove("intro");
	oak.style.display = "none";

	pokemon = searchInput.value;
	console.log(pokemon);
	// pokedex.src = "./img/pokedex1.png";
	getPokemon(pokemon);
});

const getPokemon = async (pokemon) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
	let param = {
		headers: { "Content-type": "application/jspm; charset=UTF-8" },
		method: "GET",
	};

	try {
		let data = await fetch(url, param);
		let result = await data.json();
		let imgSrc = result.sprites.other.dream_world.front_default;

		pokemonName.textContent = result.name;
		pokemonImg.src = imgSrc;
		abTitle.textContent = "Abilities:";

		let pkType = [];
		let pkAbilities = [];

		result.types.forEach((element) => {
			pkType.push(element.type.name);
		});
		result.abilities.forEach((element) => {
			pkAbilities.push(element.ability.name);
		});

		console.log(pkType);
		console.log(pkAbilities);

		fillList(pkType, typeList);
		fillList(pkAbilities, abilityList);
	} catch (error) {
		console.log(error);
		pokemonName.textContent = "not found";
		pokemonImg.src = "./img/MissingnoIdle.webp";
		abTitle.textContent = "Try again with another Pokemon";
	}
};

const fillList = (array, uList) => {
	array.forEach((element) => {
		let newListItem = document.createElement("li");

		if (uList == typeList) {
			let typeImg = document.createElement("img");
			typeImg.src = `./img/${element}.webp`;
			newListItem.classList.add(element);
			newListItem.appendChild(typeImg);
			// newListItem.textContent = element.toUpperCase();
			// newListItem.style.backgroundImage = `url('./img/${element}.png')`;
		} else {
			newListItem.textContent = element;
		}
		uList.appendChild(newListItem);
	});
};

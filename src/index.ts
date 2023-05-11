import $ from "jquery";

function removeSelected() {
  const option: JQuery<Element> = $(".selected");
  option.removeClass("selected");
}

function addSelected(button: JQuery<HTMLButtonElement>) {
  button.addClass("selected");
}

const pikachu_button: JQuery<HTMLButtonElement> = $("#pikachu");
const bulbasaur_button: JQuery<HTMLButtonElement> = $("#bulbasaur");
const charmander_button: JQuery<HTMLButtonElement> = $("#charmander");
const gyarados_button: JQuery<HTMLButtonElement> = $("#gyarados");
const gengar_button: JQuery<HTMLButtonElement> = $("#gengar");
const dragonite_button: JQuery<HTMLButtonElement> = $("#dragonite");

pikachu_button.on("click", () => {
  $("#card img").attr("src", "img/pikachu.png");
  $("#card").css("background-color", "#FCC719");

  $("#back h1").text("Pikachu");
  $("#back p").text("#001");
  $("#type").text("Elétrico");

  $("#status ul").html(
    "<li>HP: 35</li><li>Ataque: 55</li> <li>Defesa: 30</li><li>Ataque Especial: 50</li><li>Defesa Especial: 40</li><li>Velocidade: 90</li>"
  );
  $("#skills ul").html(
    "<li>Substitute</li><li>Thunderbolt</li><li>Hidden Power Ice</li><li>Encore</li>"
  );

  removeSelected();

  addSelected(pikachu_button);
});

bulbasaur_button.on("click", () => {
  $("#card img").attr("src", "img/bulbasaur.png");
  $("#card").css("background-color", "#49D0B0");

  $("#back h1").text("Bulbasaur");
  $("#back p").text("#002");
  $("#type").text("Grama | Veneno");

  $("#status ul").html(
    "<li>HP: 45</li><li>Ataque: 49</li> <li>Defesa: 49</li><li>Ataque Especial: 65</li><li>Defesa Especial: 65</li><li>Velocidade: 45</li>"
  );
  $("#skills ul").html(
    "<li>Sleep Powder</li><li>Leaf Storm</li><li>Sludge Bomb</li><li>Hidden Power Fire</li>"
  );

  removeSelected();

  addSelected(bulbasaur_button);
});

charmander_button.on("click", () => {
  $("#card img").attr("src", "img/charmander.png");
  $("#card").css("background-color", "#ED8A8B");

  $("#back h1").text("Charmander");
  $("#back p").text("#003");
  $("#type").text("Fogo");

  $("#status ul").html(
    "<li>HP: 39</li><li>Ataque: 52</li> <li>Defesa: 43</li><li>Ataque Especial: 60</li><li>Defesa Especial: 50</li><li>Velocidade: 65</li>"
  );
  $("#skills ul").html(
    "<li>Dragon Dance</li><li>Flare Blitz</li><li>Thunder Punch</li><li>Rock Slide</li>"
  );

  removeSelected();

  addSelected(charmander_button);
});

gyarados_button.on("click", () => {
  $("#card img").attr("src", "img/gyarados.png");
  $("#card").css("background-color", "#76BEFE");

  $("#back h1").text("Gyarados");
  $("#back p").text("#004");
  $("#type").text("Água | Voador");

  $("#status ul").html(
    "<li>HP: 95</li><li>Ataque: 125</li> <li>Defesa: 79</li><li>Ataque Especial: 60</li><li>Defesa Especial: 100</li><li>Velocidade: 81</li>"
  );
  $("#skills ul").html(
    "<li>Taunt</li><li>Dragon Dance</li><li>Waterfall</li><li>Bounce</li>"
  );

  removeSelected();

  addSelected(gyarados_button);
});

gengar_button.on("click", () => {
  $("#card img").attr("src", "img/gengar.png");
  $("#card").css("background-color", "#BA68C8");

  $("#back h1").text("Gengar");
  $("#back p").text("#005");
  $("#type").text("Fantasma | Veneno");

  $("#status ul").html(
    "<li>HP: 60</li><li>Ataque: 65</li> <li>Defesa: 60</li><li>Ataque Especial: 130</li><li>Defesa Especial: 75</li><li>Velocidade: 110</li>"
  );
  $("#skills ul").html(
    "<li>Shadow Ball</li><li>Focus Blast</li><li>Will-O-Wisp</li><li>Hidden Power Ice</li>"
  );

  removeSelected();

  addSelected(gengar_button);
});

dragonite_button.on("click", () => {
  $("#card img").attr("src", "img/dragonite.png");
  $("#card").css("background-color", "#C29791");

  $("#back h1").text("Dragonite");
  $("#back p").text("#006");
  $("#type").text("Dragão | Voador");

  $("#status ul").html(
    "<li>HP: 91</li><li>Ataque: 134</li> <li>Defesa: 95</li><li>Ataque Especial: 100</li><li>Defesa Especial: 100</li><li>Velocidade: 80</li>"
  );
  $("#skills ul").html(
    "<li>Dragon Dance</li><li>Outrage</li><li>Extreme Speed</li><li>Earthquake</li>"
  );

  removeSelected();

  addSelected(dragonite_button);
});

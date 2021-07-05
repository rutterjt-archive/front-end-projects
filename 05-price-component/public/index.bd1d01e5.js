function toggleClass(){$(".toggle").is(":checked")?($(".card__price--monthly").addClass("hidden"),$(".card__price--annually").removeClass("hidden")):($(".card__price--annually").addClass("hidden"),$(".card__price--monthly").removeClass("hidden"))}$(document).ready((function(){toggleClass(),$(".toggle").on("change",toggleClass)}));
//# sourceMappingURL=index.bd1d01e5.js.map

class Meal {
  id: string;
  title: string;
  categoryIds: string[];
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isLactoseFree = isLactoseFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
  }
}

export default Meal;
//   new Meal(
//     "m4",
//     ["c4"],
//     "Wiener Schnitzel",
//     "luxurious",
//     "challenging",
//     "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
//     60,
//     [
//       "8 Veal Cutlets",
//       "4 Eggs",
//       "200g Bread Crumbs",
//       "100g Flour",
//       "300ml Butter",
//       "100g Vegetable Oil",
//       "Salt",
//       "Lemon Slices",
//     ],
//     [
//       "Tenderize the veal to about 2–4mm, and salt on both sides.",
//       "On a flat plate, stir the eggs briefly with a fork.",
//       "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
//       "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
//       "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
//       "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
//       "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
//     ],
//     false,
//     false,
//     false,
//     false
//   ),

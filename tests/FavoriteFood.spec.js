describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;
	var people = [
		{
			'name': 'Tyler',
			'favoriteFood': 'Cheese'
		},
		{
			'name': 'Jesse',
			'favoriteFood': 'Beer'
		},
	];

	beforeEach(inject(function ($filter) {
			favoriteFood = $filter('favoriteFood');
	}));

	it('should return array of people matching favorite food', function () {
			expect(favoriteFood(people, 'Cheese')).toEqual([{'name': 'Tyler','favoriteFood': 'Cheese'},]);
	});
});

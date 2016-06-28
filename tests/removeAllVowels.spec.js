describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;


	beforeEach(inject(function ($filter) {
			removeAllVowels = $filter('removeAllVowels');
	}));

	it('should return a string without lowercase vowels', function () {
			expect(removeAllVowels('Cheese').toEqual('Chs');
	});
});

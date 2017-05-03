(
	function() {
	var app = angular.module('interestCalculator',[]);
	app.controller('InterestController', InterestController);
	function InterestController() {
		this.compoundMode = false;
		this.freq = "1";
		this.interest = 0;
		this.amount = 0;
		
		this.toggleMode = function() {
			this.compoundMode = this.compoundMode ? false : true;
			this.calcInterest();
		};
		
		this.initValues = function() {
			this.principal = null;
			this.rate = null;
			this.time = null;
			this.freq = "1";
			this.amount = 0;
			this.interest = 0;
		};
		
		this.calcInterest = function() {
			if(this.compoundMode === false) {
				p = this.principal;
				n = this.time;
				r = this.rate;
				if(p != null && n != null && r != null) {
					interest = (p*n*r)/100;
					this.interest = interest;
					this.amount = p + interest;
				}
				else {
					this.interest = 0;
					this.amount = 0;
				}
			}
			else {
				p = this.principal;
				r = this.rate;
				n = this.freq;
				t = this.time;
				if(p != null && r != null && n != null && t != null) {
					amount = (p * Math.pow(1+(r/(100*n)), n*t));
					this.interest = amount - p;
					this.amount = amount;
				}
				else {
					this.interest = 0;
					this.amount = 0;
				}
			}
		};
	}
}
)();
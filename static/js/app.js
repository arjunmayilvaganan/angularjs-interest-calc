(
	function() {
	var app = angular.module('interestCalculator',[]);
	app.controller('InterestController', InterestController);
	function InterestController() {
		this.compoundMode = false;
		this.freq = "1";
		this.interest = 0;
		
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
				}
				else {
					this.interest = 0;
				}
			}
			else {
				p = this.principal;
				r = this.rate;
				n = this.freq;
				t = this.time;
				if(p != null && r != null && n != null && t != null) {
					interest = (p * Math.pow(1+(r/(100*n)), n*t)) - p;
					this.interest = interest;
				}
				else {
					this.interest = 0;
				}
			}
		};
	}
}
)();
var employee = function (first, middle, last, address) {
    this.firstName = ko.observable(first);
    this.middleName = ko.observable(middle);
    this.lastName = ko.observable(last);
    this.address = ko.observable(address);

    this.fullAddress = ko.computed(function () {
        return this.firstName() + " " + this.middleName()  + " " +this.lastName() + this.address();
    }, this);
};
ko.applyBindings(new employee("Ravi", "Verma", "Perumal", "830 Anna Nagar, Trivandrum 511022"));

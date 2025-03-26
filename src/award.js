class Award {

    totalPointsAtPointOfEarning;
    titleName;
    owner;

    constructor(owner, awardName, points) {
        this.owner = owner;
        this.totalPointsAtPointOfEarning = points;
        if (this.totalPointsAtPointOfEarning <= 9) {
            this.titleName = 'Participation Medal';
        } else {
            this.titleName = awardName;
        }
    }

    getPoints() {
        return this.totalPointsAtPointOfEarning;
    }

    getName() {
        return this.titleName;
    }

    getOwner() {
        return this.owner;
    }

}

module.exports = Award;
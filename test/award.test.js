const medal = require('../src/award');

test('Creating award assigns correct props', () => {
  
    const owners = {
        'Joey': {AwardName:'Gold', Points: 100}, 
        'Lance': {AwardName:'Platinum', Points: 500}, 
        'Brock': {AwardName:'Bronze', Points: 15}, 
        'Ash': {AwardName:'Pokemon Champion', Points: 8}, 
        'Oak': {AwardName:'Silver', Points: 70}
    };

    const expectedAwards = {
        'Joey': {AwardName: 'Gold', Points: 100},
        'Lance': {AwardName: 'Platinum', Points: 500},
        'Brock': {AwardName: 'Bronze', Points: 15},
        'Ash': {AwardName: 'Participation Medal', Points: 8},
        'Oak': {AwardName: 'Silver', Points: 70}}
    
    for (var trainer in owners) {

        let award = new medal(trainer, owners[trainer].AwardName, owners[trainer].Points);

        expect(award.getOwner()).toBe(trainer);
        expect(award.getName()).toBe(expectedAwards[trainer].AwardName);
        expect(award.getPoints()).toBe(expectedAwards[trainer].Points);

    }

})

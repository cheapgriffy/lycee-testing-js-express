const { calculerMoyenne, estAdmis, getMention } = require("../src/utils/grades");

test("calcul moyenne", () => {
    expect(calculerMoyenne([10,20])).toBe(15);
    expect(calculerMoyenne([])).toBe(0);
    
})

test("calcul admission", () => {
    expect(estAdmis(15)).toBe(true);
    expect(estAdmis(5)).toBe(false);
})

test("calcul mention", () => {
    expect(getMention(17)).toBe("Très bien");
    expect(getMention(15)).toBe("Bien");
    expect(getMention(13)).toBe("Assez bien");
    expect(getMention(11)).toBe("Passable");
    expect(getMention(5)).toBe("Refusé");
})
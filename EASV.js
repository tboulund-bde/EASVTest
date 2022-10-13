import { Selector } from "testcafe"

fixture`EASV programmes`
    .page("https://www.easv.dk/en/programmes/");

test("Filter test", async t => {
    const interestSelect = Selector("#root > div > div.overview-wrapper > section > div > div.l-education-cards__row-center > div > div > div > div:nth-child(1) > select");
    const interestOption = interestSelect.find("option");

    await t
        .click(interestSelect)
        .click(interestOption.withText("IT & Media"))
        .takeScreenshot()
        .expect(Selector(".l-education-cards__card.o-card-tilt").count).eql(5)
        .click("#root > div > div.overview-wrapper > section > div > div.l-education-cards__row-center > div > div > div > div:nth-child(2) > div > div > button:nth-child(2) > span")
        .expect(Selector(".l-education-cards__card.o-card-tilt").count).eql(1)
})
import { Selector } from "testcafe"

fixture`Week number test`
    .page("https://weeknumber.com/");

test("Link to Danish version", async t => {
    await t
        .expect(Selector("#ugenr").innerText).contains("Week")
        .click("#menu > footer > ul > li:nth-child(1) > a")
        .click("a[hreflang='da']")
        .expect(Selector("#ugenr").innerText).contains("Uge")
})

test("Parse week and year", async t => {
    await t
        .typeText("#q", "12 2012")
        .pressKey("enter")
        .expect(Selector("#ugenr").innerText).eql("Week 12")
        .expect(Selector("#description").innerText).contains("2012")
})

//Hello
//Hello

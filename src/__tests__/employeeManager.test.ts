import { isEnumMember } from "typescript";
import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });


describe("New block chalange 3 requirements", () =>{
  test("Add new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Yulia Barbash",
      phone: "1233800",
      title: "QA",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("Yulia Barbash");
    let newEmployee = await em.getEmployeeInfo();
    expect(newEmployee.name).toEqual("Yulia Barbash");
    expect(newEmployee.phone).toEqual("1233800");
    expect(newEmployee.title).toEqual("QA");
  });
  test("Cancel an edit of new employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({name: "Yulia Barbash"});
    await em.cancelChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee2 = await em.getEmployeeInfo();
    expect(employee2.name).toBe("Bernice Ortiz")
  });
  test("when editing and then navigating away without saving does not save changes", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ 
      title: "Custyomer support enginner",
      name: "Yulia Barbash",});
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee3 = await em.getEmployeeInfo();
    expect(employee3.name).toBe("Bernice Ortiz");
    expect(employee3.title).toBe("CEO");
  });
});
});

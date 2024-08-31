class Bank {
  constructor(name, branch) {
    this.name = name;
    this.branch = branch;
    this.branchs = [branch];
  }

  addBranch(branch) {
    this.branchs.push(branch);
    console.log(`Branch ${branch} added`);
  }

  removeBranch(branch) {
    this.branchs = this.branchs.filter((val) => branch != val);
    console.log(`Romoved Branch: ${branch}`);
    this.allBranches();
  }

  allBranches() {
    this.branchs.map((branch, index) => {
      console.log(`${index + 1}. ${branch}`);
    });
  }
}

const wbBank = new Bank("WB_Bank", "USA");
wbBank.addBranch("UK");
wbBank.addBranch("NewYork");
wbBank.addBranch("Dubai");
wbBank.allBranches();

wbBank.removeBranch("UK");

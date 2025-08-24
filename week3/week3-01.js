//Khaniti Hatsanee
//id 67130500065

class Machine {
  constructor(os, disk) {
    this.os = os;
    this.disk = disk;
  }
 
  getOS() {
    return this.os;
  }
 
  getDisk() {
    return this.disk;
  }
}
 
class Computer extends Machine {
  constructor(os, disk, brand) {
    super(os, disk);
    this.brand = brand;
    this.vms = [];
  }
 
  getBrand() {
    return this.brand;
  }
 
  getVMs() {
    return this.vms;
  }
 
  getTotalVMDiskSize(){
        let totalSize = 0

        for (const vm of this.vms){
            totalSize += vm.getDisk();
        }
        return totalSize
    }
 
  getVMNumber() {
    return this.vms.length;
  }
 
  removeVM(vm) {
    const vmIndex = this.vms.indexOf(vm);
    if (vmIndex !== -1) {
      this.vms.splice(vmIndex, 1);
      return true;
    }
    return false;
  }
 
  addVM(vm) {
    this.vms.push(vm);
  }
}
 
class VM extends Machine {
  constructor(os, disk, hostComputer) {
    super(os, disk);
    this.hostComputer = hostComputer;
    const totalVMDisk = hostComputer.getTotalVMDiskSize();
    const remainingDisk = hostComputer.getDisk() - totalVMDisk;
 
    if (this.disk > remainingDisk) {
      throw new Error(`not enough space`);
    }
 
    this.hostComputer.addVM(this);
  }
}
 
const myComputer = new Computer("Windows 11", 500, "Dell");
console.log(myComputer.getBrand());
 
try {
  const vm1 = new VM("Ubuntu", 50, myComputer);
  console.log(myComputer.getBrand());
 
  const vm2 = new VM("CentOS", 100, myComputer);
  console.log(myComputer.getBrand());
  
  console.log(myComputer.getVMNumber());
  console.log(myComputer.getTotalVMDiskSize());
 
  const vm3 = new VM("Fedora", 400, myComputer);
  
} catch (error) {
  console.error(error.message)
}
 

myComputer.removeVM(myComputer.getVMs()[0]);
console.log(`Remove Vm total`);
console.log(`remaining VM: ${myComputer.getVMNumber()}`);
console.log(`used disk total: ${myComputer.getTotalVMDiskSize()} GB`);
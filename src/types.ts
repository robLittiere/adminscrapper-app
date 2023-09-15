interface Device {
  connected: string;
  date: string;
  datetime: string;
  hostname: string;
  ip_address: string;
  mac_address: string;
  path: string;
  time: string;
}

interface VmsType {
  errors: VmType[];
  success: VmType[];
}

interface VmType {
  name: string;
  url: string;
  status: string;
  date: string;
}

export { Device, VmsType, VmType };

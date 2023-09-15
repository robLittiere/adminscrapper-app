import axios from "axios";

export const fetchDevices = async () => {
  const url = "http://localhost:8080/api/v1/devices/";
  let data = await axios.get(url);
  return data.data.data;
};

export const fetchErrorDevices = async () => {
  const url = "http://localhost:8080/api/v1/devices/errors";
  let data = await axios.get(url);
  return data.data.data;
};

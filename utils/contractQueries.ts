import { querySc } from '../apis/queries';
import { contractAddress } from '../config';

export const getTotalTokensLeft = async (): Promise<number> => {
  const { data: data } = await querySc(contractAddress as string, "getTotalTokensLeft", { outputType: "int" });

  return parseInt(data, 10);
};

export const getCollectionSize = async (): Promise<number> => {
  const { data: data } = await querySc(contractAddress as string, "getTotalSupply", { outputType: "int" });

  return parseInt(data, 10);
};

export const getNftPrice = async (): Promise<number> => {
  const { data: data } = await querySc(contractAddress as string, "getNftPrice", { outputType: "int" });

  return parseInt(data, 10) / Math.pow(10, 18);
};

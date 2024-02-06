export interface Asset {
  AssetID: string;
  AssetName: string;
  Category: string;
  Status: string;
  ModelNumber: string;
  SerialNumber: string;
  Description: string;
  PurchaseCost: number;
  PurchaseDate: string;
  VendorName: string;
}

export const useAssets = () => {
  const assetList = useState<Asset[]>("assets", () => []);

  const setAssetList = (data: Asset[]) => {
    assetList.value = data;
  };

  const fetchInitialData = async () => {
    const config = useRuntimeConfig();

    return await fetch(`${config.app.baseURL}data.json`)
      .then((res) => res.json())
      .then((data) => {
        setAssetList(data);
      });
  };

  const addAsset = async (data: Asset) => {
    if (!assetList.value.length) {
      await fetchInitialData();
    }

    assetList.value = [data, ...assetList.value];
  };

  return {
    assetList,
    setAssetList,
    fetchInitialData,
    addAsset,
  };
};

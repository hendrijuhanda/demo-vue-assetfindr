<template>
  <UTable :columns="columns" :rows="rows" :loading="props.isLoading">
    <template #cost-data="{ row }">
      <div class="font-bold">{{ formatRupiah(row.cost) }}</div>
    </template>

    <template #status-data="{ row }">
      <div :class="statusRowClasses(row)">{{ row.status }}</div>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import { useAssets } from "~/queries/assets";

interface ManageAssetTableProps {
  isLoading: boolean;
  searchParam: string;
}

interface ColumnKeys {
  id: string;
  name: string;
  description: string;
  cost: number;
  date: string;
  status: string;
}

const columns = [
  {
    key: "id",
    label: "Asset ID/Tag",
    class: "bg-gray-100",
  },
  {
    key: "name",
    label: "Asset Name",
    class: "bg-gray-100",
  },
  {
    key: "description",
    label: "Description",
    class: "bg-gray-100",
  },
  {
    key: "cost",
    label: "Purchase Cost",
    class: "bg-gray-100",
  },
  {
    key: "date",
    label: "Purchase Date",
    class: "bg-gray-100",
  },
  {
    key: "status",
    label: "Status",
    class: "bg-gray-100",
  },
];

const props = defineProps<ManageAssetTableProps>();

const { assetList } = useAssets();

const rows = computed(() =>
  assetList.value
    .filter((asset) =>
      asset.AssetName.toLowerCase().includes(props.searchParam.toLowerCase())
    )
    .map((asset) => {
      const item: ColumnKeys = {
        id: asset.AssetID,
        name: asset.AssetName,
        description: asset.Description,
        cost: asset.PurchaseCost,
        date: asset.PurchaseDate,
        status: asset.Status,
      };

      return item;
    })
);

const statusRowClasses = (row: ColumnKeys) => {
  const baseClasses = "inline-block rounded-full px-2 py-1 text-center";

  switch (row.status) {
    case "Active":
      return [baseClasses, "text-green-400 bg-green-100"];
    case "Inactive":
      return [baseClasses, "text-red-400 bg-red-100"];
    case "In Repair":
      return [baseClasses, "text-orange-400 bg-orange-100"];
    default:
      return [baseClasses];
  }
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
</script>

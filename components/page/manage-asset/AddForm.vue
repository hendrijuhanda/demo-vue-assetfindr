<template>
  <UForm :state="formState" :schema="formSchema" @submit="handleSubmit">
    <div class="grid grid-cols-2 gap-8">
      <div class="space-y-4">
        <h4 class="font-bold">Asset Information</h4>

        <UFormGroup label="Asset ID/Tag" name="id" eager-validation>
          <UInput
            v-model="formState.id"
            placeholder="Input Asset ID/Tag"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Asset Name" name="name" eager-validation>
          <UInput
            v-model="formState.name"
            placeholder="Input Asset Name"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Category" name="category" eager-validation>
          <USelect
            v-model="formState.category"
            placeholder="Choose Category"
            :options="categoryOptions"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Status" name="status" eager-validation>
          <USelect
            v-model="formState.status"
            placeholder="Choose Status"
            :options="statusOptions"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Model Number" name="modelNumber" eager-validation>
          <UInput
            v-model="formState.modelNumber"
            placeholder="Input Model Number"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Serial Number" name="serialNumber" eager-validation>
          <UInput
            v-model="formState.serialNumber"
            placeholder="Input Serial Number"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Description" name="description" eager-validation>
          <UInput
            v-model="formState.description"
            placeholder="Input Description"
            v-bind="inputProps"
          />
        </UFormGroup>
      </div>

      <div class="space-y-4">
        <h4 class="font-bold">Purchase Information</h4>

        <UFormGroup label="Purchase Cost" name="purchaseCost" eager-validation>
          <UInput
            v-model="formState.purchaseCost"
            type="number"
            placeholder="Input Purchase Cost"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Purchase Date" name="purchaseDate" eager-validation>
          <UInput
            v-model="formState.purchaseDate"
            type="date"
            placeholder="Input Purchase Date"
            v-bind="inputProps"
          />
        </UFormGroup>

        <UFormGroup label="Vendor Name" name="vendorName" eager-validation>
          <UInput
            v-model="formState.vendorName"
            placeholder="Input Vendor name"
            v-bind="inputProps"
          />
        </UFormGroup>
      </div>
    </div>

    <div class="mt-8">
      <UButton type="submit" color="blue" :loading="isSubmitting"
        >Add Asset</UButton
      >
    </div>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useAssets } from "~/queries/assets";

const inputProps = {
  color: "blue",
};

const categoryOptions = ["Tire", "Vehicle"];
const statusOptions = ["Active", "Inactive", "In Repair"];

const router = useRouter();
const toast = useToast();
const { addAsset } = useAssets();
const isSubmitting = ref<boolean>(false);

const formSchema = z.object({
  id: z.string({ required_error: "Asset ID/Tag must be filled in!" }),
  name: z.string({ required_error: "Asset Name must be filled in!" }),
  category: z.string({ required_error: "Category must be filled in!" }),
  status: z.string({ required_error: "Status must be filled in!" }),
  modelNumber: z.string({ required_error: "Model Number must be filled in!" }),
  serialNumber: z.string({
    required_error: "Serial Number must be filled in!",
  }),
  description: z.string({ required_error: "Description must be filled in!" }),
  purchaseCost: z.number({
    required_error: "Purchase Cost must be filled in!",
  }),
  purchaseDate: z.string({
    required_error: "Purchase Date must be filled in!",
  }),
  vendorName: z.string({ required_error: "Vendor name must be filled in!" }),
});

type Schema = z.output<typeof formSchema>;

const formState = reactive({
  id: undefined,
  name: undefined,
  category: undefined,
  status: undefined,
  modelNumber: undefined,
  serialNumber: undefined,
  description: undefined,
  purchaseCost: undefined,
  purchaseDate: undefined,
  vendorName: undefined,
});

const handleSubmit = async (event: FormSubmitEvent<Schema>) => {
  const payload = {
    AssetID: event.data.id,
    AssetName: event.data.name,
    Category: event.data.category,
    Status: event.data.status,
    ModelNumber: event.data.modelNumber,
    SerialNumber: event.data.serialNumber,
    Description: event.data.description,
    PurchaseCost: event.data.purchaseCost,
    PurchaseDate: event.data.purchaseDate,
    VendorName: event.data.vendorName,
  };

  isSubmitting.value = true;

  await addAsset(payload);

  isSubmitting.value = false;

  toast.add({
    title: "SUCCESS",
    description: "Asset sucessfully added!",
    icon: "i-heroicons-check-circle",
  });

  router.push("/manage-asset");
};
</script>

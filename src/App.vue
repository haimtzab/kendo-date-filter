<script setup lang="ts">
import { ref } from 'vue';
import { Grid, GridColumnProps } from '@progress/kendo-vue-grid';
import data from './fakeData';
import GridFilter from './components/GridFilter.vue';

const items = ref(data);
const columns = ref<GridColumnProps[]>([
    {
        field: 'name',
        title: 'Name',
    },
    {
        field: 'registered',
        title: 'Registered',
        filter: 'date',
        columnMenu: 'filterTemplate',
    },
    {
        field: 'email',
        title: 'Email',
    },
    {
        field: 'company',
        title: 'Company',
    },
    {
        field: 'phone',
        title: 'Phone',
    },
]);
</script>
<template>
    <div>
        <Grid :data-items="items" :columns="columns">
            <template #filterTemplate="{ ...data }">
                <GridFilter
                    :column="data.props.column"
                />
            </template>
        </Grid>
    </div>
</template>

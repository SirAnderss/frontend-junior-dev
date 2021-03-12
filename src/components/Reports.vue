<template>
  <div
    class="reports rounded-xl flex flex-col items-center lg:items-start overflow-hidden shadow-2xl hover:shadow-xl py-8 bg-white dark:bg-gray-800 mr-4"
  >
    <div class="w-full px-8">
      <H2 content="Why do you create a startup?" />
      <p class="text-md lg:text-lg text-gray-400 text-center lg:text-left">
        Trends
      </p>
    </div>
    <apexchart
      type="pie"
      width="480"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import H2 from "./H2";

export default {
  name: "reports",
  components: { apexchart: VueApexCharts, H2 },
  data() {
    return {
      reports: [],
      series: [],
      chartOptions: {
        chart: {
          width: 220,
          type: "pie",
        },
        theme: {
          monochrome: {
            enabled: true,
            color: "#503795",
          },
        },
        labels: [],
        legend: {
          position: "bottom",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 320,
              },
              legend: {
                position: "bottom",
              },
              dataLabels: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    /* Set labels for the graph */
    setLabels({ reports }) {
      reports.forEach((el) => {
        this.series.push(el.total);
        this.chartOptions.labels.push(el.category);
      });
    },
  },
  async created() {
    const reportResponse = await fetch("/api/reports");
    const reports = await reportResponse.json();
    this.reports = reports;
    this.setLabels(reports);
  },
};
</script>

<style>
.reports {
  height: 32rem;
  width: 52rem;
}
</style>
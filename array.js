// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function generateRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Fungsi untuk mengisi array dengan nilai acak
  function fillArrayWithRandomValues(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(generateRandomValue());
    }
    return arr;
  }
  
  // Fungsi untuk membagi array menjadi dua berdasarkan indeks
  function splitArray(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk menghitung nilai minimum dalam array
  function calculateMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dalam array
  function calculateMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai dalam array
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dalam array
  function calculateAverage(arr) {
    const total = calculateTotal(arr);
    return total / arr.length;
  }
  
  // Mengisi array dengan nilai acak
  const randomArray = fillArrayWithRandomValues(100);
  
  // Membagi array menjadi dua
  const [evenArray, oddArray] = splitArray(randomArray);
  
  // Menghitung statistik untuk array genap
  const evenMin = calculateMin(evenArray);
  const evenMax = calculateMax(evenArray);
  const evenTotal = calculateTotal(evenArray);
  const evenAverage = calculateAverage(evenArray);
  
  // Menghitung statistik untuk array ganjil
  const oddMin = calculateMin(oddArray);
  const oddMax = calculateMax(oddArray);
  const oddTotal = calculateTotal(oddArray);
  const oddAverage = calculateAverage(oddArray);
  
  // Membandingkan statistik antara array genap dan ganjil
  const minComparison = evenMin > oddMin ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
  const maxComparison = evenMax > oddMax ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil";
  const totalComparison = evenTotal === oddTotal ? "Total memiliki nilai yang sama pada array genap dan ganjil" : "Total berbeda antara array genap dan ganjil";
  const avgComparison = evenAverage > oddAverage ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil";
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Min, Max, Total, Rata-rata pada array genap:", evenMin, evenMax, evenTotal, evenAverage);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:", oddMin, oddMax, oddTotal, oddAverage);
  console.log(minComparison);
  console.log(maxComparison);
  console.log(totalComparison);
  console.log(avgComparison);
  
// fungsi untuk download file
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("windows-10.exe");
        }, 3000);
    });
};

// fungsi untuk menampilkan hasil download
const main = () => {
    download()
    .then((res) => {
        console.log("Download selesai");
        console.log("Hasil Download: " + res);
    });
}

main();
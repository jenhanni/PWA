self.addEventListener("install", pEvent => {
    console.log("서비스 워커 설치 완료");
})
self.addEventListener("activate", pEvent => {
    console.log("서비스 워커 동작 시작");
})
self.addEventListener("fetch", pEvent => {
    console.log("데이터 요청(fetch");
})
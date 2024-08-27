/**
 * 
**여러 개의 도시가 연결된 그래프가 있습니다. 각 도시에는 특정한 비용으로만 이동할 수 있으며, 특정 출발지에서 도착지로 이동할 때 최소 비용을 계산하세요.**

**입력:**

- N: 도시의 수 (1 ≤ N ≤ 1,000)
- M: 도로의 수 (1 ≤ M ≤ 10,000)
- 도로 정보
    - M개의 줄에 걸쳐 각 줄은 세 정수 u, v, w로 이루어져 있습니다.
    - 이는 도시 u에서 도시 v로 가는 비용이 w임을 의미합니다.
- 시작 도시 S와 도착 도시 E 
 */

function generateRandomInput(N, M) {
  // N개의 도시를 생성
  const cities = Array.from({ length: N }, (_, i) => i + 1);

  const roads = [];
  const connectedCities = new Set();

  // 마지막 도시를 제외한 모든 도시는 최소 한 번 다음 도시로 이동할 수 있어야 함
  for (let i = 1; i < N; i++) {
    const u = i;
    const v = i + 1;
    const w = Math.floor(Math.random() * 10) + 1; // 1에서 10 사이의 임의의 비용
    roads.push({ u, v, w });
    connectedCities.add(u);
    connectedCities.add(v);
  }

  // 나머지 M - (N-1) 개의 도로를 임의로 생성하되, 순환이 발생하지 않도록 설정
  for (let i = 0; i < M - (N - 1); i++) {
    let u = cities[Math.floor(Math.random() * (N - 1))]; // N-1까지만 선택 (마지막 도시 제외)
    let v = cities[Math.floor(Math.random() * N)];

    // 출발 도시가 도착 도시보다 크거나 같지 않도록 설정하여 순환을 방지
    while (v <= u) {
      v = cities[Math.floor(Math.random() * N)];
    }

    const w = Math.floor(Math.random() * 10) + 1; // 1에서 10 사이의 임의의 비용
    roads.push({ u, v, w });
    connectedCities.add(u);
    connectedCities.add(v);
  }
  // 도로 정보를 출발 도시 u를 기준으로 오름차순 정렬
  roads.sort((a, b) => a.u - b.u);

  // 임의의 시작 도시와 도착 도시를 설정
  const S = cities[Math.floor((Math.random() * N) / 2)];
  const E = cities[Math.floor(Math.random() * (N - S) + S)];

  // 입력 데이터 출력
  console.log("[입력]");
  console.log(`N : ${N} M : ${M}`);
  roads.forEach((road) => {
    console.log(`${road.u} ${road.v} ${road.w}`);
  });
  console.log(`S: ${S} E: ${E}`);
  return {
    N,
    M,
    roads,
    S,
    E,
  };
}

function solution(input) {
    const { N, M, roads, S, E } = input;
  
   const distances = Array(N + 1).fill(Infinity);
   distances[S] = 0;
  
   for (let i = 0; i < N - 1; i++) {
       for (let j = 0; j < M; j++) {
           const {u, v, w} = roads[j];
           if (distances[u] + w < distances[v]) {
               distances[v] = distances[u] + w;
           }
       }
   }
      console.log("[출력]");
      console.log(distances[E]);
  
  }

  
  
console.clear();
const input = generateRandomInput(5, 6);
solution(input);



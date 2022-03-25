// https://www.acmicpc.net/problem/18870

package main.java;

import java.io.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.StringTokenizer;

public class 좌표압축 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            int value = Integer.parseInt(st.nextToken());
            arr[i] = value;
        }

        int[] sortedArr = arr.clone();
        Arrays.sort(sortedArr);

        int cnt = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            if (map.containsKey(sortedArr[i])) {
                continue;
            }
            map.put(sortedArr[i], cnt++);
        }

        for (int i = 0; i < n; i++) {
            bw.write(map.get(arr[i]) + " ");
        }

        bw.flush();
        bw.close();
    }
}

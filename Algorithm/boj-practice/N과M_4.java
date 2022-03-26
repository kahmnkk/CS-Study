// https://www.acmicpc.net/problem/9663

package main.java;

import java.io.*;
import java.util.StringTokenizer;

public class N과M_4 {

    public static int n, m;

    public static int[] arr;
    public static boolean[] visit;

    public static void dfs(int prevVal, int d) {
        if (d == m) {
            for (int val : arr) {
                System.out.print(val + " ");
            }
            System.out.println();
            return;
        }

        for (int i = prevVal; i <= n; i++) {
            arr[d] = i;

            dfs(i, d + 1);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        arr = new int[m];
        visit = new boolean[n];
        dfs(1, 0);

        bw.flush();
        bw.close();
    }
}

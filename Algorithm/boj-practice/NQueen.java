// https://www.acmicpc.net/problem/9663

package main.java;

import java.io.*;

public class NQueen {
    private static int cnt = 0;
    private static int[] arr;
    private static int n;

    public static boolean check(int d) {
        for (int j = 0; j < d; j++) {
            if (arr[j] == arr[d] || Math.abs(j - d) == Math.abs(arr[j] - arr[d])) {
                return false;
            }
        }
        return true;
    }

    public static void recursion(int d) {
        if (d == n) {
            cnt++;
        } else {
            for (int i = 0; i < n; i++) {
                arr[d] = i;

                boolean isCheck = check(d);
                if (isCheck) {
                    recursion(d + 1);
                }
            }
        }

    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        n = Integer.parseInt(br.readLine());

        arr = new int[n];
        recursion(0);

        bw.write(String.valueOf(cnt));

        bw.flush();
        bw.close();
    }
}

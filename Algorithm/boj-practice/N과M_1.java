// https://www.acmicpc.net/problem/9663

package main.java;

import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class N과M_1 {
    private static int n, m;
    private static final ArrayList<ArrayList<Integer>> arr = new ArrayList<>();

    public static void recursion(ArrayList<Integer> curr, int value) {
        ArrayList<Integer> temp = (ArrayList<Integer>) curr.clone();
        temp.add(value);

        if (temp.size() == m) {
            arr.add(temp);
            return;
        }

        for (int i = 1; i <= n; i++) {
            if (temp.contains(i)) {
                continue;
            }
            recursion(temp, i);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        ArrayList<Integer> arrayList = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            recursion(arrayList, i);
        }

        for (ArrayList<Integer> integers : arr) {
            for (Integer integer : integers) {
                bw.write(integer + " ");
            }
            bw.newLine();
        }

        bw.flush();
        bw.close();
    }
}

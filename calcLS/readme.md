データに対して、最小二乗法で二次関数をフィッティングするサンプルコード


好きなものを選んで実行してみて下さい。上から楽な順。

- calcLs.html : webブラウザ上でcalcLs.jsの計算結果を表示する
- ls.ods : 表計算上で算出するシート。A3とB3を下に17個コピーして利用。LibreOffice Calc用。(拡張子xlsxはexcel等)<BR>
 テストデータ生成用シート付き。ノイズはLCGsとBox-Muller法を利用。
- lsmat.py : python3用スクリプト。```python3 lsmat.py``` で実行。実行サイトで貼り付けて実行させても可。
- calcLs.js : javascriptで計算。 ```node calcLs.js``` で実行。実行サイトで貼り付けて実行させても可。
- lsMat.m : matlab/octaveで計算するスクリプト(学校のＰＣにはソフトが入ってないため実行できませんので、自宅のＰＣで行ってください）
- data.txt : テストデータ。（スクリプト上では読み込み部はコメントアウトしているので利用しない）

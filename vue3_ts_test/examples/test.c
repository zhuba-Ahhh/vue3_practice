#include<stdio.h>

/*
print函数负责打印0到9的中文大写.
thousandmaxprint实现不超过一万的数的中文输出.
tenthousandmaxprint实现不超过一亿的数的中文输出.
hundredbillionmaxprint实现不超过一万亿的中文输出.
日常用到中文输出的大部分是财务系统的账目大写,一般
不会超过一万亿.
*/
void print(int n);
void thousandmaxprint(int n);
void tenthousandmaxprint(int n);
void hundredbillionmaxprint(int n);

/*
主程序.
*/
int main() {
	int n;
	printf("输入一个数字的小写后回车可以输出中文写法\n");
	scanf("%d", &n);
	if (n >= 100000000)
		hundredbillionmaxprint(n);
	else{
		if (n >= 10000)
			tenthousandmaxprint(n);
		else
			thousandmaxprint(n);
	}
	return 0;
}

void print(int n) {
	if (n == 0)
		printf("零");
	if (n == 1)
		printf("一");
	if (n == 2)
		printf("二");
	if (n == 3)
		printf("三");
	if (n == 4)
		printf("四");
	if (n == 5)
		printf("五");
	if (n == 6)
		printf("六");
	if (n == 7)
		printf("七");
	if (n == 8)
		printf("八");
	if (n == 9)
		printf("九");
}

void thousandmaxprint(int n) {
	int bit[4] = { 0,0,0,0 };
	bit[0] = n / 1000;
	bit[1] = n % 1000 / 100;
	bit[2] = n % 100 / 10;
	bit[3] = n % 10;
	int start = 0;
	//开始状态变量,当其为1时才会开始打印
	int firstzero = 1;
	//寻找中间的第一个0,输出后会置为0
	int alwayszero = 1;
	//是否从第一个0开始全部是0

	//如果是0
	if (n == 0)
		print(n);
	else {
		//开始遍历
		for (int tempcount = 0; tempcount < 4; tempcount++) {
			if (bit[tempcount] != 0 || tempcount == 3)
				//寻找到最后一位或已经遍历到最后一位
				start = 1;
			if (start) {
				if (bit[tempcount] != 0) {
					if (tempcount == 0) {
						print(bit[tempcount]);
						printf("千");
					}
					if (tempcount == 1) {
						print(bit[tempcount]);
						printf("百");
					}
					if (tempcount == 2) {
						print(bit[tempcount]);
						printf("十");
					}
					if (tempcount == 3) {
						print(bit[tempcount]);
					}
				}
				else {
					if (firstzero && tempcount < 3) {
						//如果是第一个0且不是最末位,则判断是否之后全是0.
						for (int i = tempcount; i < 4; i++)
							if (bit[i] != 0)
								alwayszero = 0;
						if (!alwayszero)
							//如果不是全部是0,则输出一个0且将第一个0状态置为0.
							print(bit[tempcount]);
						firstzero = 0;
					}
				}
			}
		}
	}
}

/*
分离万以上和万以下的部分应用上面定义好的函数.
*/
void tenthousandmaxprint(int n) {
	int n1 = n / 10000;
	int n2 = n % 10000;
	if (n1 != 0) {
		thousandmaxprint(n1);
		printf("万");
	}
	if (n2 != 0) {
		if (n2 < 1000);
			printf("零");
		thousandmaxprint(n2);
	}
}
/*
原理基本同上.
*/
void hundredbillionmaxprint(int n) {
	int n1 = n / 100000000;
	int n2 = n % 100000000;
	thousandmaxprint(n1);
	printf("亿");
	if (n2 != 0)
		tenthousandmaxprint(n2);
}

#include <iostream>
using namespace std;
int a[100][100];
int d[100][100];

int main(){
	int n;
	cin >> n;

	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			cin>>a[i][j];
		}
	}

	d[0][0] = 1;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){

			//만약 점핑 할 수가 0이면 스킵해도 되므로 예외로 처리
			if(a[i][j]==0)
				continue;
			//먼저 세로줄부터 주어진 점핑 횟 수를 더한 후 범위를 넘어가는지 확인
			if(j+a[i][j] <n){
				//범위 안 이면 그 그자리에 그 전에 횟수를 더해준다.
				d[i][j+a[i][j]] += d[i][j];
			}
			//가로줄도 똑같이 확인해준다.
			if(i+a[i][j] < n){
				//범위 내면 더해준다.
				d[i+a[i][j]][j] += d[i][j];
			}
		}
	}

	cout<<d[n-1][n-1]<<'\n';

	return 0;
}
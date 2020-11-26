#include<iostream>
using namespace std;

int d[100][3];
int a[100][2];
int main(){
	int n;
	cin >> n;

	for(int i=0;i<n;i++){
		for(int j=0;j<2;j++){
			cin >> a[i][j];
		}
	}

	for(int i=0;i<n;i++){
		
		d[i][0] = max(d[i-1][0],max(d[i-1][1],d[i-1][2]));
		d[i][1] = max(d[i-1][0],d[i-1][2])+a[i][0];
		d[i][2] = max(d[i-1][0],d[i-1][1])+a[i][1];
	}

	int ans = max(d[n][0],max(d[n][1],d[n][2]));
	cout << ans<<'\n';

}
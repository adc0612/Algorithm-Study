#include <iostream>
using namespace std;

int main(){
	int n;
	cin >> n;
	int d[100];
	d[0] = 1;
	d[1] = 1;
	for(int i=2;i<=n;i++){
		d[i] = d[i-1] + d[i-2];
	}
	cout<<d[n];


}
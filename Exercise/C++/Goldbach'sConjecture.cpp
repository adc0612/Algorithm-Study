#include <iostream>
using namespace std;
const int MAX = 1000000;
bool c[MAX+1];
int p[MAX];
int pn = 0;

int main(){
	
	for(int i=2;i<=MAX;i++){
		if(c[i] == false){
			p[pn++] = i;
			for(int j = i+i;j<=MAX;j+=i){
				c[i] = true;
			}
		}
	}

	while(true){
		int n;
		cin >> n;
		if(n==0){
			break;
		}
		for(int i=1;i<pn;i++){
			if(c[n-p[i]] == false){
				cout << n << "=" << p[i]<<" + "<<n-p[i]<<'\n';
				break;
			}
		}
	}

	return 0;
}
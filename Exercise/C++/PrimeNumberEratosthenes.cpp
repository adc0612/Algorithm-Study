#include <iostream>
using namespace std;
bool c[101];

int main(){
	int pn =0;
	int n =100;

	c[0]=c[1]= true;

	for(int i=2;i*i<=n;i++){
		if(c[i] == false){
			for(int j=i+i;j<=n;j+=i){
				c[j] = true;
			}
		}
	}

	cout<<"소수는: "<<'\n';
	for(int i=2;i<=n;i++){
		if(c[i] == false){
			pn++;
			cout<<i<<'\n';
		}
	}
	cout<<'\n';
	cout<<"소수의 개수는: "<<'\n';
	
	cout<<pn<<'\n';



	return 0;
}
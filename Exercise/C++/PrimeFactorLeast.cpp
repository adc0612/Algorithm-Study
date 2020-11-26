#include <iostream>
#include <vector>
using namespace std;

int leastPrimeFactor(int n){

	vector<int> list(n+1,0);

	//1의 소인수는 1이니
	list[1] = 1;

	for(int i =2;i<=n;i++){
		//list[i] == 0
		//뜻은 i는 소수
		if(list[i] == 0){
			//소수는 자기자신을
			//수인수로 지정
			list[i] = i;

			for(int j = i+i;j<=n;j+=i){
				if(list[j] ==0){
					list[j] = i;
				}
			}
		}
	}
	if(list[n] == n){
		return 1;
	}else{
		return list[n];
	}
}

int main(){
	int n;
	cin >> n;
	cout<< leastPrimeFactor(n)<<'\n';
}


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

			//���� ���� �� ���� 0�̸� ��ŵ�ص� �ǹǷ� ���ܷ� ó��
			if(a[i][j]==0)
				continue;
			//���� �����ٺ��� �־��� ���� Ƚ ���� ���� �� ������ �Ѿ���� Ȯ��
			if(j+a[i][j] <n){
				//���� �� �̸� �� ���ڸ��� �� ���� Ƚ���� �����ش�.
				d[i][j+a[i][j]] += d[i][j];
			}
			//�����ٵ� �Ȱ��� Ȯ�����ش�.
			if(i+a[i][j] < n){
				//���� ���� �����ش�.
				d[i+a[i][j]][j] += d[i][j];
			}
		}
	}

	cout<<d[n-1][n-1]<<'\n';

	return 0;
}